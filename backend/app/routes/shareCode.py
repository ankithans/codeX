from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder
from decouple import config
import databases
import sqlalchemy
from pydantic import BaseModel

router = APIRouter()



DATABASE_URL="sqlite:///./test.db"
database=databases.Database(DATABASE_URL)
metadata=sqlalchemy.MetaData()

codes=sqlalchemy.Table(
    "py_codes",
    metadata,
    sqlalchemy.Column("id",sqlalchemy.Integer,primary_key=True, autoincrement=True),
    sqlalchemy.Column("codes",sqlalchemy.String)

)

engine = sqlalchemy.create_engine(
    DATABASE_URL, connect_args={"check_same_thread": False}
)
metadata.create_all(engine)

class CodeX(BaseModel):
    id:int
    codes:str

@router.on_event("startup")
async def startup():
    await database.connect()

@router.on_event("shutdown")
async def shutdown():
    await database.disconnect()


@router.post("/", response_description="Share Code by saving in DB")
async def create_code(code: CodeX):
    query = codes.insert().values(codes=code.codes)
    last_record_id = await database.execute(query)
    return {**code.dict(), "id": last_record_id}
    

@router.get("/{code_id}", response_description="Get code by id")
async def read_notes(code_id: int):
    query = codes.select().where(codes.c.id == code_id)
    return await database.fetch_one(query)