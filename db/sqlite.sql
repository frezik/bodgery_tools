CREATE TABLE members (
    id INTEGER NOT NULL PRIMARY KEY,
    rfid TEXT NOT NULL UNIQUE,
    active BOOLEAN NOT NULL
);
CREATE INDEX members_rfid_active ON members (rfid, active);

CREATE TABLE tools (
    id INTEGER NOT NULL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE member_tools (
    id INTEGER NOT NULL PRIMARY KEY,
    member_id INTEGER REFERENCES members(id),
    tools_id INTEGER REFERENCES tools(id)
);


-- TEST DATA
INSERT INTO members (rfid, active) VALUES
    (100, 1),
    (101, 1),
    (102, 0);
INSERT INTO tools (name) VALUES
    ('laser'),
    ('big-laser'),
    ('tormach');
INSERT INTO member_tools (member_id, tools_id) VALUES
    (
        (SELECT id FROM members WHERE rfid = 100 LIMIT 1), 
        (SELECT id FROM tools WHERE name = 'laser')
    );

