from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import uvicorn

class Query(BaseModel):
    text: str
    context: dict = None

app = FastAPI()
batcomputer = QuantumBatcomputer()

@app.post('/query')
async def process_query(query: Query):
    try:
        response = await batcomputer.generate_response(query.text)
        return {'response': response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post('/learn')
async def learn(data: dict):
    try:
        await batcomputer.learn(data)
        return {'status': 'success'}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)
