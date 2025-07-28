import os

class Config:
    SECRET_KEY = "clave-super-secreta"
    SQLALCHEMY_DATABASE_URI = "sqlite:///dimacademy.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
