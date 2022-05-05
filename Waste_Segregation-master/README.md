# Waste_Segregation
**This Repo is the official head repo for the Waste Segregation Management Model.**

## Guidlines for the contributors
To ensure a proper workflow and minimal clashes. Kindly, adhere to the given procedure.
This will ensure a sagacious development of the project.

### 1. Forking this repo
       -> Log into Github with your account.
       -> Find the Github Repo: https://github.com/mittaljai-2/Waste_Segregation
       -> Click the Fork button.
      
### 2. Local Clone
       -> Open the terminal/git bash on your pc at your desired location.
       -> Clone the FORKED-REPO (not the original one), it will be in your Github Account.
       -> Run the command
                      "git clone <forked repo clone URL>"
       -> You will now have all the files and folders from your forked repo onto your local device.
       
### 3. Adding a Remote
       -> Git already added a Git remote named 'origin' to the clone of the Git repository on your system.
       -> This will allow you to push changes back up to the forked repository in your GitHub account using "git commit" (to add commits locally) and "git push".
       -> Now let's add a Git remote pointing back to the ORIGINAL repo. This will ensure you can update your forked repo according to the ORIGINAL repo.
       -> Run the command
                        " git remote add upstream <original repo clone URL>"
       -> So, your remotes are ready to use now.
       -> 'origin':    Name of the remote to access your forked repo so that you can commit and push changes to it.
       -> 'upstream':  Name of the remote to access the original repo so that you can keep your forked repo up to date with the original one.
       
### 4. Pushing the changes
       -> After you have committed the changes and all the work to your repo.
       -> Push them onto the Github (the forked repo).
       -> Using the command
                          " git push <remote> <branch_name> "
       -> So, if you're pushing the changes to the master branch of your forked repo. The command will become
                          " git push origin master "
                          
### 5. Opening a Pull Request
       -> This part is extremely easy with GitHub.
       -> Once the changes are pushed onto your repo, GitHub will prompt you to make a Pull Request.
       -> Open a Pull Request by comparing the changes across the original repo and your forked one.
       
### 6. After a merged Pull Request
       -> After your changes are merged in the main/original/head repo.
       -> You should update your local clone by using " git pull upstream master " & " git push origin master ". ( 'upstream' is the remote for the original repo )
       -> Now, the changes you made for the project are in the head repo and you have also updated your forked repo accordingly.
       
### 7. Keeping your Fork in Sync
       -> To keep your fork in sync with the original repository. 
       -> Use these commands:
                            " git pull upstream master "
                            " git push origin master "
                        
                          
                          
                          
