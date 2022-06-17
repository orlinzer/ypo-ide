# **YPO IDE**

## Abstract

**YPO IDE** is a web IDE running on a web browser for educational purposes.

This project was created by [**Or Linzer**](mailto://orlinzer@gmail.com) as his final project in his software practical engineering studies in the Technion, for [**Young Professors Online (YPO)**](https://www.ypo.co.il), part of [**Alef Levinsky management and consulting**](mailto://oleg@aleflevinsky.com).


Environment Variable Load Order
NODE_ENV=production
1. .env.production.local
2. .env.local
3. .env.production
4. .env
NODE_ENV=development
1. .env.development.local
2. .env.local
3. .env.development
4. .env
NODE_ENV=test
1. .env.test.local
2. .env.test
3. .env
Note: .env*.local contain secrets
