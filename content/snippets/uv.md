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
## auto-venvs
I also find it convenient to create venvs that automatically activate when you enter a folder, and deactivate when you exit - no need to deal with activating or deactivating.

To do this, first create the venv with the following:
```
uv venv
```
Then create an `.envrc` file with the following:
```
echo "source .venv/bin/activate" > .envrc
```
Then allow direnv in the directory:
```
direnv allow .
```

Now you can add packages as usual with:
```
uv pip install torch
```
and they will install to your venv

## requirements
Keep a track of all your packages with:
```
uv pip freeze > requirements.txt
```
install packages from requirements with
```
uv pip install -r requirements.txt
```
## installing
just run:
```
curl -LsSf https://astral.sh/uv/install.sh | sh
```
see https://docs.astral.sh/uv/getting-started/installation/ for more info.

for direnv, run:
```
curl -sfL https://direnv.net/install.sh | bash
```
from https://direnv.net/docs/installation.html.