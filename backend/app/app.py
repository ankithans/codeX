from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routes.compile import router as CodeCompileRouter
from .routes.convertPseudo import router as ConvertCodeIntoPseudoRouter
from .routes.warnings import router as WarningsRouter
from .routes.translatePseudo import router as TranslateRouter
from .routes.shareCode import router as ShareCodeRouter
from .routes.flowchart import router as FlowchartRouter

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(CodeCompileRouter, tags=["Code Compile"], prefix="/api/v1/compile")
app.include_router(ConvertCodeIntoPseudoRouter, tags=["Convert Code into Pseudo Code"], prefix="/api/v1/convert")
app.include_router(WarningsRouter, tags=["Generate Warnings from the code"], prefix="/api/v1/warnings")
app.include_router(TranslateRouter, tags=["Translate Pseudo Code"], prefix="/api/v1/translate")
app.include_router(ShareCodeRouter, tags=["Share Code"], prefix="/api/v1/share")
app.include_router(FlowchartRouter, tags=["Create FlowChart"], prefix="/api/v1/flow")

@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to CodeX"}