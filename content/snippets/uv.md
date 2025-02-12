I really like `uv` for python package management. It's fast, and I also like how you can make quick portable scripts - just add the following to the top of your script:

***test.py:***
```
#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.12"
# dependencies = ["torch", "numpy"]
# ///

import torch
print(torch.__version__)
```
and run it with 
```
uv run test.py
```
### extra credit
make it an executable with
```
chmod +x test.py
```
then run it with
```
./test.py
```
### installing
just run:
```
curl -LsSf https://astral.sh/uv/install.sh | sh
```
see https://docs.astral.sh/uv/getting-started/installation/ for more info.