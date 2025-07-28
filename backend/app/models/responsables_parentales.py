from app import db

class ResponsableParental(db.Model):
    __tablename__ = "responsables_parentales"

    id_responsable = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    dni = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(100))
    telefono = db.Column(db.String(20))
    domicilio = db.Column(db.String(100))

    estudiantes = db.relationship('ResponsableEstudiante', backref='responsable', lazy=True)
