from fastapi import APIRouter, HTTPException, Response
from pydantic import BaseModel
from qa_chain import get_answer

router = APIRouter()

class QueryRequest(BaseModel):
    question: str

@router.post("/chat")
def ask_question(request: QueryRequest):
    try:
        answer_dict = get_answer(request.question)
        result = answer_dict.get("result", "No result found.")
        return Response(content=result, media_type="text/plain")
    except Exception:
        raise HTTPException(status_code=500, detail="An unexpected error occurred. Please try again later.")

