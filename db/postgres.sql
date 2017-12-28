CREATE EXTENSION pgcrypto;


CREATE TABLE members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    rfid TEXT NOT NULL UNIQUE,
    active BOOLEAN NOT NULL
);
CREATE INDEX ON members (rfid, active);

CREATE TABLE tools (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE member_tools (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    member_id UUID REFERENCES members(id),
    tools_id UUID REFERENCES tools(id)
);
