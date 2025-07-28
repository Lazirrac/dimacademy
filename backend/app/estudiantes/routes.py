# app/estudiantes/routes.py
from flask import Blueprint, jsonify
from flask_login import login_required
from app.utils.decoradores import rol_requerido

estudiantes_bp = Blueprint("estudiantes", __name__, url_prefix="/estudiantes")

@estudiantes_bp.route("/dashboard", methods=["GET"])
@login_required
@rol_requerido("estudiante")
def dashboard_estudiante():
    return jsonify({"mensaje": "Vista del panel ESTUDIANTE"})
