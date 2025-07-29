#backend/app.py
from app import create_app
import os

app = create_app()

if __name__ == "__main__":
    # Opcional: leer host y puerto desde entorno
    host = os.getenv("FLASK_RUN_HOST", "127.0.0.1")
    port = int(os.getenv("FLASK_RUN_PORT", 5000))
    
    app.run(host=host, port=port)
