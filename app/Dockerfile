FROM python:3
ENV PYTHONUNBUFFERED 1

RUN mkdir /app
WORKDIR /app

ADD requirements.txt .
RUN pip install -r requirements.txt

ARG install_gunicorn=false
RUN if [ "$install_gunicorn" = "true" ]; then pip install "gunicorn==19.7.1"; else echo Not installing gunicorn; fi

ADD . /app

