# app/establecimientos/routes.py
from flask import Blueprint, jsonify
from flask_login import login_required
from app.utils.decoradores import rol_requerido

establecimientos_bp = Blueprint("establecimientos", __name__, url_prefix="/establecimientos")

@establecimientos_bp.route("/dashboard", methods=["GET"])
@login_required
@rol_requerido("establecimiento")
def dashboard_establecimiento():
    return jsonify({"mensaje": "Vista del usuario de establecimiento"})
