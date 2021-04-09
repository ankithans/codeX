from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder

from ..services.pylint import generate_warnings

router = APIRouter()

@router.post("/", response_description="Generate warnings and suggestions in the code")
async def compile(source: str = Body(...), test: str = Body(...)):
    warns = generate_warnings(source)
    return jsonable_encoder(warns.splitlines())