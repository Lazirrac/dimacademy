from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_cors import CORS
from .config import Config

db = SQLAlchemy()
bcrypt = Bcrypt()
login_manager = LoginManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app, origins=["http://localhost:5173"], supports_credentials=True)
    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)
    

    from app.models.usuarios_sistema import UsuarioSistema

    @login_manager.user_loader
    def load_user(user_id):
        return UsuarioSistema.query.get(int(user_id))

    # Blueprints
    from app.auth.routes import auth_bp
    from app.admin.routes import admin_bp
    from app.sistema.routes import sistema_bp
    from app.establecimientos.routes import establecimientos_bp
    from app.docentes.routes import docentes_bp
    from app.estudiantes.routes import estudiantes_bp
    from app.responsables.routes import responsables_bp

    app.register_blueprint(admin_bp)
    app.register_blueprint(sistema_bp)
    app.register_blueprint(establecimientos_bp)
    app.register_blueprint(docentes_bp)
    app.register_blueprint(estudiantes_bp)
    app.register_blueprint(responsables_bp)
    app.register_blueprint(auth_bp)


    return app
