
# How to dump mysql database from command line on linux machine?
---
###### 2020-02-07 || Category: Linux / databases

![MysqlDump](https://raw.githubusercontent.com/pr0logas/blog.prologas/master/assets/images/mysqldump.png)

At first let's quickly setup our mysql database credentials file. Let's assume you are using **vim** editor:

```
vim ~/.mysql_cred.cnf
```

Paste your database credentials information:
```
[client]
user=root
password=myLongandSuperSecretPass
```

Now we can start dumping our whole database by command:

``` js
mysqldump --defaults-file=~/.mysql_cred.cnf --databases mydbname > /tmp/mydumpedDBname.sql --verbose 
```

Or you can choose to dump a **specific table** from database:

``` js
mysqldump --defaults-file=~/.mysql_cred.cnf --databases mydbname --tables /tmp/mytablename > mytabledump.sql --verbose 
```

Finally, remove credentials file for security reasons:

```
rm ~/.mysql_cred.cnf
```

That's it, hope this was helpful.
---