# backend\app\responsables\routes.py
from flask import Blueprint, jsonify
from flask_login import login_required
from app.utils.decoradores import rol_requerido

responsables_bp = Blueprint("responsables", __name__, url_prefix="/responsables")

@responsables_bp.route("/dashboard", methods=["GET"])
@login_required
@rol_requerido("responsable")
def dashboard_responsable():
    return jsonify({"mensaje": "Vista del panel RESPONSABLE PARENTAL"})
