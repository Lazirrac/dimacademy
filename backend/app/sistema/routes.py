# app/sistema/routes.py
from flask import Blueprint, jsonify
from flask_login import login_required
from app.utils.decoradores import rol_requerido

sistema_bp = Blueprint("sistema", __name__, url_prefix="/sistema")

@sistema_bp.route("/dashboard", methods=["GET"])
@login_required
@rol_requerido("sistema")
def dashboard_sistema():
    return jsonify({"mensaje": "Vista del sistema de gestión general"})
