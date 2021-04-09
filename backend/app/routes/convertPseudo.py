from fastapi import APIRouter, Body, Body
from fastapi.encoders import jsonable_encoder

from ..services.pseudo_code import convertCodeIntoPseudoCode

router = APIRouter()


@router.post("/", response_description="Convert Python Code into Pseudo Code")
async def compile(source: str = Body(...), test: str = Body(...)):
    return convertCodeIntoPseudoCode(source)
