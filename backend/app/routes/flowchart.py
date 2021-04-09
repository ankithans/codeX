from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder
from decouple import config

from ..services.flowchart import generateFlowChartData

router = APIRouter()

@router.post("/", response_description="Generate flowchart from py code")
async def flowchart(source: str = Body(...), test: str = Body(...)):
   flows = generateFlowChartData(source)
   return jsonable_encoder(flows)
