from app import db
from flask_login import UserMixin
from datetime import datetime

class UsuarioSistema(db.Model, UserMixin):
    __tablename__ = "usuarios_sistema"

    id_usuario = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    contrasena_hash = db.Column(db.String(200), nullable=False)
    rol = db.Column(db.String(20), nullable=False)

    id_establecimiento = db.Column(db.Integer, db.ForeignKey("establecimientos_educativos.id_establecimiento"), nullable=True)
    id_docente = db.Column(db.Integer, db.ForeignKey("usuarios_docentes.id_docente"), nullable=True)
    id_estudiante = db.Column(db.Integer, db.ForeignKey("estudiantes.id_estudiante"), nullable=True)
    id_responsable = db.Column(db.Integer, db.ForeignKey("responsables_parentales.id_responsable"), nullable=True)

    activo = db.Column(db.Boolean, default=True)
    fecha_creacion = db.Column(db.DateTime, default=datetime.utcnow)
    def get_id(self):
        return str(self.id_usuario)