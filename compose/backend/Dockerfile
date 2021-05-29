FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /app

COPY ./backend/requirements.txt .
RUN pip install -r requirements.txt

COPY ./compose/backend/scripts/entrypoint.sh /entrypoint.sh
COPY ./compose/backend/scripts/start.sh /start.sh
COPY ./compose/backend/scripts/utils/wait-for-it.sh /wait-for-it.sh

ENTRYPOINT [ "/entrypoint.sh" ]