# backend\app\config.py
import os
from datetime import timedelta
from dotenv import load_dotenv

# ✅ Cargar variables de entorno desde .env (raíz del proyecto)
load_dotenv()

class BaseConfig:
    SECRET_KEY = os.getenv('SECRET_KEY')
    FRONTEND_ORIGIN = os.getenv("FRONTEND_ORIGIN")

    # 🔐 Seguridad en sesiones
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SAMESITE = 'Lax'
    SESSION_COOKIE_SECURE = True  # True solo en HTTPS
    REMEMBER_COOKIE_HTTPONLY = True
    PERMANENT_SESSION_LIFETIME = timedelta(hours=2)

    # 🛢️ SQLAlchemy
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JSON_SORT_KEYS = False


class DevelopmentConfig(BaseConfig):
    DEBUG = True
    SESSION_COOKIE_SECURE = False
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')


class ProductionConfig(BaseConfig):
    DEBUG = False
    SESSION_COOKIE_SECURE = True
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')
