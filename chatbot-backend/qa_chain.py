import warnings
warnings.filterwarnings("ignore", category=DeprecationWarning)

from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_chroma import Chroma
from langchain.retrievers import EnsembleRetriever
from langchain_openai import ChatOpenAI
from langchain.chains import RetrievalQA

from config import API_KEY

# Load and split rules
rules_loader = TextLoader("rules.txt", encoding="utf-8")
rule_docs = rules_loader.load()
text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
rule_chunks = text_splitter.split_documents(rule_docs)

# Embeddings
embedding_model = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L12-v2")

# Vector stores
faiss_db = FAISS.load_local("Constitution_Index", embedding_model, allow_dangerous_deserialization=True)
chroma_db = Chroma.from_documents(documents=rule_chunks, embedding=embedding_model)

# Ensemble retriever
ensemble_retriever = EnsembleRetriever(
    retrievers=[faiss_db.as_retriever(), chroma_db.as_retriever()],
    weights=[0.5, 0.5]
)

# Language model
llm = ChatOpenAI(
    openai_api_base="https://openrouter.ai/api/v1",
    openai_api_key=API_KEY,
    model_name="meta-llama/llama-4-maverick:free"
)

# Retrieval QA Chain
qa_chain = RetrievalQA.from_llm(llm=llm, retriever=ensemble_retriever)

def get_answer(query: str) -> str:
    return qa_chain.invoke(query)
