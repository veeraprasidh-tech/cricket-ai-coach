from fastapi import FastAPI, UploadFile, File
import shutil
from video_analyzer import analyze_video

app = FastAPI()

@app.post("/analyze")
async def analyze(video: UploadFile = File(...)):
    file_path = f"uploads/{video.filename}"
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(video.file, buffer)

    result = analyze_video(file_path)
    return result
