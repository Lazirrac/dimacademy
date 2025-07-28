from app import db

class EstablecimientoEducativo(db.Model):
    __tablename__ = "establecimientos_educativos"

    id_establecimiento = db.Column(db.Integer, primary_key=True)
    cue = db.Column(db.String(20), unique=True, nullable=False)
    nombre_establecimiento = db.Column(db.String(100), nullable=False)
    nivel_educativo = db.Column(db.String(50))
    dependencia = db.Column(db.String(50))
    direccion = db.Column(db.String(100))
    localidad = db.Column(db.String(50))
    provincia = db.Column(db.String(50))

    docentes = db.relationship('UsuarioDocente', backref='establecimiento', lazy=True)
    estudiantes = db.relationship('Estudiante', backref='establecimiento', lazy=True)
