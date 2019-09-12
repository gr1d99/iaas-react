#!/usr/bin/env ruby

require "fileutils"

include FileUtils

BRANCH = ARGV[0]
GIT_USER = "gr1d99"
GIT_REPO = "iaps-react"
GIT_URL = "https://github.com/"
REPO_URL = GIT_URL + GIT_USER + "/" + GIT_REPO
GIT_COMMAND = "git clone #{REPO_URL} --branch=#{BRANCH}"

system(GIT_COMMAND)

cd(GIT_REPO)

system("git remote -v")
