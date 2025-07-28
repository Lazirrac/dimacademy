from functools import wraps
from flask import jsonify
from flask_login import current_user

def rol_requerido(rol):
    def decorador(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            if not current_user.is_authenticated or current_user.rol != rol:
                return jsonify({"error": "Acceso denegado"}), 403
            return func(*args, **kwargs)
        return wrapper
    return decorador
