# pgs
Project Governance System




# permission for pgAdmin data folder
sudo chown -R 5050:5050 ${DATA_PATH_HOST}/pgadmin

# connect to postgres container
psql -d pgs_database -U pgsUser
