#backend\app\utils\decoradores.py
from functools import wraps
from flask import jsonify
from flask_login import current_user

def rol_requerido(*roles):
    def decorador(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            if not current_user.is_authenticated:
                return jsonify({"error": "Autenticación requerida"}), 401
            if current_user.rol not in roles:
                return jsonify({"error": f"Acceso denegado para rol: {current_user.rol}"}), 403
            return func(*args, **kwargs)
        return wrapper
    return decorador
