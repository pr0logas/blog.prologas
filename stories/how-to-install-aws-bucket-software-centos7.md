
# How to mount AWS S3 bucket on Centos 7.x machine?
---
###### 2020-02-07 || Category: Centos / AWS

![MysqlDump](assets/images/Amazon_web_services_S3.jpg)

Make sure you don't have already installed fuse software. If yes, remove it:

```
yum remove fuse fuse-s3fs -y
```

Now install gcc and other tools which are required in order to build **s3fs-fuse**:
```
yum install gcc libstdc++-devel gcc-c++ curl-devel libxml2-devel openssl-devel mailcap automake git fuse-devel -y
```

Let's download the source code from official repository and compile it:

``` js
git clone https://github.com/s3fs-fuse/s3fs-fuse.git
cd s3fs-fuse
./autogen.sh
./configure
make
make install
```

After successful compilation set our BUCKET credentials, should be in this link:

https://console.aws.amazon.com/iam/home?#/security_credentials

The syntax:

```AWS_ACCESS_KEY_ID:AWS_SECRET_ACCESS_KEY```

Open a file editor and create aws credentials file:

```
vi ~/.passwd-s3fs
```

```
MyKeyID:SecretKey
```

Set permissions for **.passwd-s3fs**
```
chmod 600 ~/.passwd-s3fs
```

Create an empty directory and try to mount the bucket:

```
mkdir -p ~/S3
```
```
/usr/local/bin/s3fs yourbucketname ~/S3 -o passwd_file=~/.passwd-s3fs
```

Finally check your bucket:
```
cd ~/S3/ && ls -l
```