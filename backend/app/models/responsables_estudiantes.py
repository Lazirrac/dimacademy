from app import db

class ResponsableEstudiante(db.Model):
    __tablename__ = "responsables_estudiantes"

    id = db.Column(db.Integer, primary_key=True)
    id_estudiante = db.Column(db.Integer, db.ForeignKey("estudiantes.id_estudiante"))
    id_responsable = db.Column(db.Integer, db.ForeignKey("responsables_parentales.id_responsable"))
    vinculo = db.Column(db.String(50))  # padre, madre, tutor, etc.
