from flask import Blueprint, request, jsonify
from flask_login import login_user, logout_user
from app.models.usuarios_sistema import UsuarioSistema
from app import bcrypt

auth_bp = Blueprint("auth", __name__, url_prefix="/auth")

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    user = UsuarioSistema.query.filter_by(email=data["email"]).first()

    if user and bcrypt.check_password_hash(user.contrasena_hash, data["password"]):
        login_user(user)
        return jsonify({
            "mensaje": "Login exitoso",
            "rol": user.rol,
            "id_usuario": user.id_usuario
        }), 200

    return jsonify({"error": "Credenciales inválidas"}), 401


@auth_bp.route("/logout", methods=["POST"])
def logout():
    logout_user()
    return jsonify({"mensaje": "Sesión cerrada"})
