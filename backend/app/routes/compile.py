from fastapi import APIRouter, Form, Body
from fastapi.encoders import jsonable_encoder
from decouple import config

from ..services.hackerearth_compile import run_code

router = APIRouter()

@router.post("/", response_description="Compile python code with hackerearth api")
async def compile(source: str = Body(...), input: str = Body(...)):
    return run_code(source, input)
