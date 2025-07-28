# app/admin/routes.py
from flask import Blueprint, jsonify
from flask_login import login_required
from app.utils.decoradores import rol_requerido

admin_bp = Blueprint("admin", __name__, url_prefix="/admin")

@admin_bp.route("/dashboard", methods=["GET"])
@login_required
@rol_requerido("admin")
def dashboard_admin():
    return jsonify({"mensaje": "Vista del panel ADMINISTRADOR"})

from app.models.usuarios_sistema import UsuarioSistema

@admin_bp.route("/test-db", methods=["GET"])
def test_db_connection():
    usuarios = UsuarioSistema.query.all()
    return jsonify({
        "total_usuarios": len(usuarios),
        "primer_usuario": usuarios[0].email if usuarios else "No hay usuarios"
    })
