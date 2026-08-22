import os
import subprocess
import random
from datetime import datetime


def get_commit_count():
    day = datetime.now().weekday()
    commit_rules = {
        0: random.randint(1, 3),  
        1: random.randint(2, 4),  
        2: 2,                     
        3: 3,                     
        4: 8,                     
        5: random.randint(1, 4),  
        6: random.randint(1, 3),  
    }
    return commit_rules.get(day, 1)

LOG_FILE = "contribution_log.txt"

def run_cmd(cmd):
    return subprocess.run(cmd, shell=True, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))

    try:
        branch = run_cmd("git rev-parse --abbrev-ref HEAD").stdout.strip()
    except Exception:
        branch = "main"

    try:
        run_cmd("git pull --rebase")
    except Exception as e:
        print(f"Pull warning: {e}")

    commits_today = get_commit_count()
    print(f"Hari ini ({datetime.now().strftime('%A')}): Menjalankan {commits_today} commit.")

    for i in range(1, commits_today + 1):
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")
        with open(LOG_FILE, "a", encoding="utf-8") as f:
            f.write(f"Auto contribution update #{i} at {timestamp}\n")
        
        run_cmd(f"git add {LOG_FILE}")
        run_cmd(f'git commit -m "chore: daily activity #{i} - {timestamp}"')

    if commits_today > 0:
        run_cmd(f"git push origin {branch}")
        print("Push berhasil!")

if __name__ == "__main__":
    main()  