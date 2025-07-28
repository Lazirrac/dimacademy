from app import db

class Estudiante(db.Model):
    __tablename__ = "estudiantes"

    id_estudiante = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    dni = db.Column(db.String(20), unique=True, nullable=False)
    fecha_nacimiento = db.Column(db.Date)

    id_establecimiento = db.Column(db.Integer, db.ForeignKey("establecimientos_educativos.id_establecimiento"))
    id_docente = db.Column(db.Integer, db.ForeignKey("usuarios_docentes.id_docente"))

    grado_anio = db.Column(db.String(20))
    division = db.Column(db.String(10))
    turno = db.Column(db.String(20))

    responsables = db.relationship('ResponsableEstudiante', backref='estudiante', lazy=True)
