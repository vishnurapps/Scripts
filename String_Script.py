    from subprocess import PIPE, Popen     
    filetype = "*.so"
    sos = []
    p = Popen(['find', '/usr', '-iname', filetype], stdout=PIPE)
    for line in p.stdout:
        line = line.replace('\n', '')
        sos.append(line)
    p.wait()
    print p.returncode
    look = "Reached the callback"
    for item in sos:
        first = Popen(['strings', '-a', item], stdout=PIPE)
        second = Popen(['grep', '-inr', look], stdin=first.stdout, stdout=PIPE)
        out, err = second.communicate()
        if out:
            print "Output is " + str(out) + "Library is " + item
