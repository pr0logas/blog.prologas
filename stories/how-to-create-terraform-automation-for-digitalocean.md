
# Terraform automation for DigitalOcean
---
###### 2020-02-21 || Category: Cloud / DigitalOcean

![Terraform](https://raw.githubusercontent.com/pr0logas/blog.prologas/master/assets/images/terraform.png)

First thing let's download terraform software:

```https://www.terraform.io/downloads.html```

Now let's use my own terraform template which should work perfectly fine (save it as `main.tf`):

```
provider "digitalocean" {
	token = "myDigitalOceanToken"
}

variable "basicinfo" {
  default = "setting-my-vm-name-01"
}

data "digitalocean_ssh_key" "jenkins" {
  name = "jenkins-ansible"
}

resource "digitalocean_droplet" "newvm" {
  backups = false
  ipv6 = false
  private_networking = true
  name = var.basicinfo
  image = "ubuntu-18-04-x64"
  resize_disk = false
  size = "s-1vcpu-1gb"
  region = "fra1"
  ssh_keys = [data.digitalocean_ssh_key.jenkins.id]
}

output "newvm-names" {
  value = "${digitalocean_droplet.newvm.*.name}"
}

output "newvm-ips" {
	value = "${digitalocean_droplet.newvm.*.ipv4_address}"
}
```

You need to change accordingly:

**token** - yourDOtoken

**digitalocean_ssh_key** - your-ssh-key-name

**size** - s-1vcpu-1gb

**region** - fra1

Please take note, that **output** values come after vm creation. 
Now lets init your terraform app & create a vm:

```
terraform init
terraform apply -auto-approve
```

That's it, you should see something like this:

```
data.digitalocean_ssh_key.jenkins: Refreshing state...

An execution plan has been generated and is shown below.
Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # digitalocean_droplet.newvm will be created
  + resource "digitalocean_droplet" "newvm" {
      + backups              = false
      + created_at           = (known after apply)
      + disk                 = (known after apply)
      + id                   = (known after apply)
      + image                = "ubuntu-18-04-x64"
      + ipv4_address         = (known after apply)
      + ipv4_address_private = (known after apply)
      + ipv6                 = false
      + ipv6_address         = (known after apply)
      + ipv6_address_private = (known after apply)
      + locked               = (known after apply)
      + memory               = (known after apply)
      + monitoring           = false
      + name                 = "setting-my-vm-name-01"
      + price_hourly         = (known after apply)
      + price_monthly        = (known after apply)
      + private_networking   = true
      + region               = "fra1"
      + resize_disk          = false
      + size                 = "s-1vcpu-1gb"
      + ssh_keys             = [
          + "25247878",
        ]
      + status               = (known after apply)
      + urn                  = (known after apply)
      + vcpus                = (known after apply)
      + volume_ids           = (known after apply)
    }

Plan: 1 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

digitalocean_droplet.newvm: Creating...
digitalocean_droplet.newvm: Still creating... [10s elapsed]
digitalocean_droplet.newvm: Still creating... [20s elapsed]
digitalocean_droplet.newvm: Still creating... [30s elapsed]
digitalocean_droplet.newvm: Creation complete after 37s [id=181979676]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.

Outputs:
```

I hope this helped you.

---

**Keywords:**

*Terraform, digital ocean, ansible, automation*