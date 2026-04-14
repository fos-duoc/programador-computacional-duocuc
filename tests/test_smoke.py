"""Smoke tests basicos del entorno Python.

Habilitan que pytest pase con tests reales y permiten quitar
`continue-on-error: true` del workflow CI.
"""

import sys


def test_python_version_is_at_least_3_13() -> None:
    assert sys.version_info >= (3, 13), (
        f"Python 3.13+ requerido (pyproject.toml requires-python), "
        f"actual: {sys.version_info.major}.{sys.version_info.minor}"
    )


def test_core_deps_importables() -> None:
    import numpy
    import pandas
    import requests
    import sqlalchemy

    for mod in (pandas, numpy, requests, sqlalchemy):
        assert hasattr(mod, "__version__"), f"{mod.__name__} sin __version__"
