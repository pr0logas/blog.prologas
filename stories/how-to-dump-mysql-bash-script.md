
# Simple MySQL dump bash script
---
###### 2020-02-14 || Category: Linux / MySQL

![MysqlDump](https://raw.githubusercontent.com/pr0logas/blog.prologas/master/assets/images/mysqldump.png)

```
#!/usr/bin/env bash
##: Author: Tomas Andriekus
##: 2020-02-14

backups_path=~/S3/mysql/importer/
name=$(date '+%Y-%m-%d-%s')
how_many_backups_to_keep_in_count=3 # Note that the number will be increased to +1
mysql_credential_file=~/.mysql_cred.cnf
database_name_to_backup=blockchains

cd $backups_path && ls -1tr | head -n -$how_many_backups_to_keep_in_count | xargs -d '\n' rm -f --
$(which mysqldump) --defaults-file=$mysql_credential_file --databases $database_name_to_backup > $backups_path$name.sql
```

Create a file with this code somewhere, for example:
```
vim ~/mysql_db_backup.sh
```

Add execution permissions:

```
chmod 600 ~/.mysql_cred.cnf
chmod +x ~/mysql_db_backup.sh
```

Finally, add to crontab:

``` js
crontab -e
```

---