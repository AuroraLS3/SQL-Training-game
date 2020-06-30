function delay(durationMs, that) {
    return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, that), durationMs)
    });
}

async function hideElement(id) {
    const element = document.getElementById(id);
    if (!element) return console.error(`Element by id ${id} not found`);
    element.classList.add("hidden-fadeout");
    await delay(200);
    element.classList.add("hidden");
    element.classList.remove("hidden-fadeout");
}

async function hideElementImmediately(id) {
    const element = document.getElementById(id);
    if (!element) return console.error(`Element by id ${id} not found`);
    element.classList.add("hidden");
}

async function showElement(id) {
    const element = document.getElementById(id);
    if (!element) return console.error(`Element by id ${id} not found`);
    element.classList.remove("hidden");
    await delay(10);
    element.classList.add("hidden-fadein");
    await delay(200)
    element.classList.remove("hidden-fadein");
}

async function showElementImmediately(id) {
    const element = document.getElementById(id);
    if (!element) return console.error(`Element by id ${id} not found`);
    element.classList.remove("hidden");
}

async function fadeToBlack() {
    const fade = document.getElementById('fade-to-black');
    fade.style.display = "";
    await delay(50);
    fade.style.opacity = "1";
    await delay(400);
}

async function fadeFromBlack() {
    const fade = document.getElementById('fade-to-black');
    fade.style.opacity = "0";
    await delay(400);
    fade.style.display = "none";
}

async function flashElement(id) {
    const element = document.getElementById(id);
    element.classList.remove("hidden");
    await delay(25 + Math.random() * 50);
    element.classList.add("hidden");
    await delay(25 + Math.random() * 50);
    element.classList.remove("hidden");
    await delay(25 + Math.random() * 50);
    element.classList.add("hidden");
    const chanceOfThirdStrike = Math.random();
    if (chanceOfThirdStrike > 0.5) {
        await delay(100 + Math.random() * 150);
        element.classList.remove("hidden");
        await delay(50 + Math.random() * 100);
        element.classList.add("hidden");
    } else if (chanceOfThirdStrike > 0.3) {
        await delay(25 + Math.random() * 50);
        element.classList.remove("hidden");
        await delay(25 + Math.random() * 50);
        element.classList.add("hidden");
    }
}

function showModal(id, changeToViewAfter) {
    return new Promise((resolve) => {
        $(id).modal()
            .on('hidden.bs.modal', () => {
                $(id).off('hidden.bs.modal');
                resolve()
            });
    }).then(() => {
        return changeSecondaryView(changeToViewAfter ? changeToViewAfter : Views.NONE);
    });
}

async function shakeElement(id) {
    async function rotateRight(element) {
        element.style.transform = "rotate(5deg)";
        await delay(100);
    }

    async function rotateLeft(element) {
        element.style.transform = "rotate(-5deg)";
        await delay(100);
    }

    const element = document.getElementById(id);
    await rotateRight(element);
    for (let i = 0; i < 3; i++) {
        await rotateLeft(element);
        await rotateRight(element);
    }
    element.style.transform = "";
}

async function shookElement(id) {
    async function moveRight(element) {
        element.style.transform = "translate(7px)";
        await delay(100);
    }

    async function moveLeft(element) {
        element.style.transform = "translate(-7px)";
        await delay(100);
    }

    const element = document.getElementById(id);
    await moveRight(element);
    for (let i = 0; i < 2; i++) {
        await moveLeft(element);
        await moveRight(element);
    }
    element.style.transform = "";
}

function shootConfetti(durationMs, particles) {
    const end = Date.now() + durationMs;
    (function frame() {
        confetti({
            particleCount: particles ? particles : 5,
            colors: particles === 2 ? ['#21F0F3', '#4AB8FF'] : undefined,
            angle: 60,
            spread: 55,
            origin: {x: 0, y: 0.8}
        });
        confetti({
            particleCount: particles ? particles : 5,
            colors: particles === 2 ? ['#21F0F3', '#4AB8FF'] : undefined,
            angle: 120,
            spread: 55,
            origin: {x: 1, y: 0.8}
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

async function animateFlame() {
    const flameStyle = document.getElementById("task-flame-container").style;
    flameStyle.animation = "explode 1.2s";
    await delay(1200);
    flameStyle.animation = "";
}

async function resetFlameAnimation() {
    const goodFlame = document.getElementById('good-flame');
    const evilFlame = document.getElementById('evil-flame');
    const speech = document.getElementById('task-animation-flame-speech');

    DISPLAY_STATE.endgame = false;
    updateCompletionIndicator();
    goodFlame.style.opacity = "1";
    evilFlame.style.opacity = "0";
    speech.classList.add('task-description');
    speech.classList.remove('evil-task-description');
    speech.innerHTML = `hihihi.. hihi hi.. Ehkä olisi vihdoin aika esittäytyä. Olen Kyselyx, ja
                    ansiostasi sain nyt käsiini kaiken SQL tietämyksen..`
    document.getElementById('evil-flame-animation-explanation').classList.add('hidden');
    document.getElementById('evil-flame-exit').classList.add('hidden');
}

async function evilFlameAnimation() {
    let frameCount = 0;
    const body = document.getElementById('body');
    const goodFlame = document.getElementById('good-flame');
    const evilFlame = document.getElementById('evil-flame');
    const speech = document.getElementById('task-animation-flame-speech');

    let translation = 15;
    let starCount = 60;

    let shake = false;
    let starburst = false;
    let stealingStars = false;
    let previous;
    const particles = [];
    await (async function frame(time) {
        if (!previous) previous = time;
        const expected = 16; // Frame rate adjustment, higher speed monitors have smaller than expected elapsed time.
        const elapsed = time - previous;
        if (expected > elapsed) {
            requestAnimationFrame(frame);
            return;
        }
        frameCount++;

        if (frameCount === 50) {
            flashElement('lightning-bolt-left');
        }

        if (frameCount === 270) {
            speech.innerHTML += `<br>
                INSERT INTO Flame (power) VALUES (SELECT power FROM Stars);`
        }
        if (frameCount === 300) {
            stealingStars = true;
            shake = true;
            flashElement('lightning-bolt-right');
        }
        if (frameCount === 498) {
            shake = false;
        }

        if (frameCount === 500) {
            speech.innerHTML += `<br><br>
                Muahahaha Voimasi ovat minun!<br>
                UPDATE Flame SET color='evil' WHERE name='Kyselyx';`
        }

        if (frameCount % 3 === 0 && shake) {
            translation *= -1;
            body.style.transform = `translate(0, ${translation}px)`;
        } else if (frameCount % 2 === 0 && starburst) {
            async function flyFlame() {
                const particle = flyFlameFromTo('evil-flame-animation',
                    {x: 0.3 * window.innerWidth, y: 0.3 * window.innerHeight},
                    {x: (0.2 + Math.random() * 0.2) * window.innerWidth, y: -0.2 * window.innerHeight});
                particles.push(particle);
                await awaitUntil(() => !particle.animated);
                particle.element.remove();
            }

            flyFlame();
        } else {
            body.style.transform = '';
        }

        if (frameCount % 3 === 0 && stealingStars && starCount > 0) {
            starCount--;

            async function flyStar() {
                const particle = flyStarFromTo('evil-flame-animation',
                    document.getElementById('star-indicator'),
                    {x: 0.2 * window.innerWidth, y: 0.3 * window.innerHeight});
                particles.push(particle);
                await awaitUntil(() => !particle.animated);
                particle.element.remove();
            }

            flyStar();
            updateCompletionIndicator(starCount);
        }

        if (frameCount === 500) {
            flashElement('lightning-bolt-right');
        }

        if (frameCount > 500 && frameCount < 512) {
            goodFlame.style.opacity = (parseInt(goodFlame.style.opacity) + 1) % 2;
            evilFlame.style.opacity = (parseInt(evilFlame.style.opacity) + 1) % 2;
            speech.classList.toggle('task-description');
            speech.classList.toggle('evil-task-description');
        }

        if (frameCount === 800) {
            speech.innerHTML += `<br><br>
                MAAILMASI ON MENNYTTÄ!<br>
                SELECT * FROM World JOIN Flame on World.location != Flame.location;`
            starburst = true;
            hideElement('star-indicator');
        }
        if (frameCount === 950) {
            speech.innerHTML += `<br><br>AHAHAHAhaahahaHAHAHAahAHAHAAHAaaa`
        }


        if (frameCount === 770) {
            flashElement('lightning-bolt-right');
        }
        if (frameCount === 782) {
            flashElement('lightning-bolt-left');
        }
        if (frameCount === 820) {
            flashElement('lightning-bolt-right');
        }
        if (frameCount === 829) {
            flashElement('lightning-bolt-right');
        }
        if (frameCount === 842) {
            flashElement('lightning-bolt-right');
        }
        if (frameCount === 869) {
            flashElement('lightning-bolt-left');
        }
        if (frameCount === 893) {
            flashElement('lightning-bolt-right');
        }
        if (frameCount === 925) {
            flashElement('lightning-bolt-right');
        }

        if (frameCount === 1050) {
            document.getElementById('evil-flame-animation-explanation').classList.remove('hidden');
            document.getElementById('evil-flame-exit').classList.remove('hidden');
        }

        if (frameCount > 1000 && frameCount % 432 === 0) {
            flashElement('lightning-bolt-right');
        }
        if (frameCount > 1000 && frameCount % 342 === 0) {
            flashElement('lightning-bolt-left');
        }

        particles.forEach(particle => particle.frame());

        if (DISPLAY_STATE.currentView === Views.FLAME_ANIMATION) {
            requestAnimationFrame(frame);
        }
    }());
}


async function endAnimation() {
    let frameCount = 0;
    const evilFlame = document.getElementById('end-evil-flame');
    const speech = document.getElementById('end-flame-speech');
    const explanation = document.getElementById('end-explanation');
    const exitButton = document.getElementById('end-exit');

    let flameCount = 40;

    `MUTTA MINÄ TEEN LISÄÄ! Hahahahaha!<br><br>

    SELECT ...<br><br>

    EI! Mitä te luulette tekevänne!<br><br>

    <i>Kyselyx, et ole tarpeeksi vahva. Hän on osoittanut meille mahtinsa, ja nyt sinä saat mitä sinulle kuuluu.</i><br><br>

    EIIIIIIIIIIIIIIIIiiiiiiiiiiiiiiiiiiiiiiii...........`

    let previous;
    const particles = [];
    await (async function frame(time) {
        if (!previous) previous = time;
        const expected = 16; // Frame rate adjustment, higher speed monitors have smaller than expected elapsed time.
        const elapsed = time - previous;
        if (expected > elapsed) {
            requestAnimationFrame(frame);
            return;
        }
        frameCount++;

        if (frameCount === 50) {
            flashElement('end-lightning-bolt-left');
        }

        if (frameCount === 270) {
            speech.innerHTML += `<br><br>MUTTA MINÄ TEEN LISÄÄ! Hahahahaha!`
        }
        if (frameCount === 370) {
            speech.innerHTML += `<br><br>SELECT ...`
        }
        if (frameCount > 370 && frameCount % 3 === 0 && flameCount > 0) {
            async function flyAndOrbit() {
                const particle = createFlameParticle('end-animation', document.getElementById('flame-indicator'));
                const evilFlame = document.getElementById('end-evil-flame-container');
                const pos = getElementPosition(evilFlame);
                pos.x += (evilFlame.offsetWidth - 10) / 2;
                pos.y += 190 / 2;
                particle.flyTo({x: 0.4 * window.innerWidth, y: 0.1 * window.innerHeight});
                particles.push(particle);
                await awaitUntil(() => !particle.animated);
                particle.orbit(pos);
            }

            flyAndOrbit();
            flameCount -= 1;
            updateCompletionIndicator(flameCount);
        }
        if (frameCount === 430) {
            evilFlame.style.animation = 'flamedie2 infinite 0.5s'
        }
        if (frameCount === 450) {
            speech.innerHTML += `<br><br>EI! Mitä te luulette tekevänne!`
        }

        if (frameCount === 700) {
            speech.innerHTML += `<br><br><i>Kyselyx, et ole tarpeeksi vahva. Hän on osoittanut meille mahtinsa, ja nyt sinä saat mitä sinulle kuuluu.</i>`
        }

        async function flyParticleToFlame(particle) {
            particle.flyTo({x: 0.3 * window.innerWidth, y: 0.3 * window.innerHeight});
            await awaitUntil(() => !particle.animated)
            particle.element.remove();
        }

        if (frameCount === 875) {
            evilFlame.style.animation = ''
        }

        if (frameCount === 900) {
            particles.forEach(flyParticleToFlame);
            evilFlame.style.transform = 'scale(3) translateY(-5%) translateX(-5%)'
            evilFlame.style.opacity = '0'
            speech.innerHTML += `<br><br>EIIIIIIIIIIIIIIIIiiiiiiiiiiiiiiiiiiiiiiii...........`
        }

        if (frameCount === 1100) {
            exitButton.classList.remove('hidden');
        }

        particles.forEach(particle => particle.frame());

        if (DISPLAY_STATE.currentView === Views.END_ANIMATION) {
            requestAnimationFrame(frame);
        }
    }());
}