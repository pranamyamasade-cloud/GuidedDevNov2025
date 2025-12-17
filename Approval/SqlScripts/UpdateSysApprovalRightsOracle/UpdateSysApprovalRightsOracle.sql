BEGIN
	DECLARE TableName varchar(250) := 'Approval';
			sqltext VARCHAR2(4000);
	BEGIN
		sqltext := N'DELETE FROM "Sys'|| TableName ||'Right"';
		EXECUTE IMMEDIATE sqltext;
		
		sqltext := N'INSERT INTO "Sys'|| TableName ||'Right" ("CreatedOn", "ModifiedOn", "RecordId",
		"SysAdminUnitId", "Operation", "RightLevel", "Position")
		SELECT CURRENT_DATE, CURRENT_DATE, o."Id", au."Id", op.Id, 2, 0	FROM "Sys'|| TableName ||'" o
		INNER JOIN "SysAdminUnit" au
		ON (au."ContactId" = o."CreatedById")
		CROSS JOIN (SELECT 0 Id FROM DUAL UNION ALL SELECT 1 FROM DUAL UNION ALL SELECT 2 FROM DUAL) op
		WHERE NOT EXISTS(SELECT NULL FROM "SysApprovalRight"
		WHERE "RecordId" = o."Id"
		AND "SysAdminUnitId" = au."Id"
		AND "Operation" = op.Id)';
		EXECUTE IMMEDIATE sqltext;

		sqltext := N'INSERT INTO "Sys'|| TableName ||'Right" ("CreatedOn", "ModifiedOn", "RecordId",
		"SysAdminUnitId", "Operation", "RightLevel", "Position")
		SELECT CURRENT_DATE, CURRENT_DATE, o."Id", au."Id", op.Id, 2, 0
		FROM "Sys'|| TableName ||'" o
		INNER JOIN "SysAdminUnit" au
		ON (au."Id" = o."VisaOwnerId")
		CROSS JOIN (SELECT 0 Id FROM DUAL UNION ALL SELECT 1 FROM DUAL) op
		WHERE NOT EXISTS(SELECT NULL FROM "Sys'|| TableName ||'Right"
		WHERE "RecordId" = o."Id"
		AND "SysAdminUnitId" = au."Id"
		AND "Operation" = op.Id)';
		EXECUTE IMMEDIATE sqltext;
	END;
END;