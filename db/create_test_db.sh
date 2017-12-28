#!/bin/bash
DB_FILE=sqlite.db
SQL_FILE=sqlite.sql

rm -f ${DB_FILE}
sqlite3 ${DB_FILE} ${SQL_FILE}
