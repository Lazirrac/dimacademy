#backend\app\auth\routes.py
# backend/app/auth/routes.py

from flask import Blueprint, request, jsonify
from flask_login import login_user, logout_user, login_required
from app.models.usuarios_sistema import UsuarioSistema
from app import bcrypt

auth_bp = Blueprint("auth", __name__, url_prefix="/api/auth")


@auth_bp.route("/check-email", methods=["POST"])
def check_email():
    data = request.get_json()
    if not data or "email" not in data:
        return jsonify({"error": "Email requerido"}), 400

    user = UsuarioSistema.query.filter_by(email=data["email"]).first()
    if not user:
        return jsonify({"error": "Correo no registrado"}), 404

    return jsonify({"message": "Email válido"}), 200


@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    if not data or "email" not in data or "password" not in data:
        return jsonify({"error": "Email y contraseña requeridos"}), 400

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
@login_required
def logout():
    logout_user()
    return jsonify({"mensaje": "Sesión cerrada"})
