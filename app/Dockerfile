FROM python:3
ENV PYTHONUNBUFFERED 1

RUN mkdir /app
WORKDIR /app

ADD requirements.txt .
RUN pip install -r requirements.txt

ADD wsgi_requirements.txt .
ARG install_wsgi_reqs=false
RUN if [ "$install_wsgi_reqs" = "true" ]; then pip install -r wsgi_requirements.txt; else echo Not installing wsgi reqs; fi

ADD . /app
