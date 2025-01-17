terraform {
  backend "s3" {
    bucket  = "edward-chatty-app-client-terraform-state"
    key     = "develop/chatapp.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"

  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManagedBy   = "Terraform"
    Owner       = "Edward Kuan"
  }
}
