# backend\app\docentes\routes.py
from flask import Blueprint, jsonify
from flask_login import login_required
from app.utils.decoradores import rol_requerido

docentes_bp = Blueprint("docentes", __name__, url_prefix="/docentes")

@docentes_bp.route("/dashboard", methods=["GET"])
@login_required
@rol_requerido("docente")
def dashboard_docente():
    return jsonify({"mensaje": "Vista del panel DOCENTE"})

