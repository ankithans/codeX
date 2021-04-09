from fastapi import Body,APIRouter
from google_trans_new import google_translator  

router = APIRouter()
translator = google_translator()



@router.post("/", response_description="Translate Pseudo Code into multiple languages")
async def translate(text: str= Body(...),dest_lang:str=Body(...)):
    translation = translator.translate(text,dest_lang)
    return translation