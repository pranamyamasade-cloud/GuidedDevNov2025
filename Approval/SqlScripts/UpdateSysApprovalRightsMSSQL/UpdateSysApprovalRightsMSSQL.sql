DECLARE @TableName NVARCHAR(250) = 'Approval'
PRINT 'Start process ' + @TableName
EXEC ('
DELETE FROM Sys' + @TableName + 'Right;
INSERT INTO Sys' + @TableName + 'Right (CreatedOn, ModifiedOn, RecordId,
SysAdminUnitId, Operation, RightLevel, Position)
SELECT GETUTCDATE(), GETUTCDATE(), o.Id, au.Id, op.Id, 2, 0
FROM [Sys' + @TableName + '] o WITH(NOLOCK)
INNER JOIN SysAdminUnit au
ON (au.ContactId = o.CreatedById)
CROSS JOIN (SELECT 0 Id UNION ALL SELECT 1 UNION ALL SELECT 2) op
WHERE NOT EXISTS(SELECT NULL FROM Sys' + @TableName + 'Right WITH(NOLOCK)
WHERE RecordId = o.Id
AND SysAdminUnitId = au.Id
AND Operation = op.Id);

INSERT INTO Sys' + @TableName + 'Right (CreatedOn, ModifiedOn, RecordId,
SysAdminUnitId, Operation, RightLevel, Position)
SELECT GETUTCDATE(), GETUTCDATE(), o.Id, au.Id, op.Id, 2, 0
FROM [Sys' + @TableName + '] o WITH(NOLOCK)
INNER JOIN SysAdminUnit au
ON (au.Id = o.VisaOwnerId)
CROSS JOIN (SELECT 0 Id UNION ALL SELECT 1) op
WHERE NOT EXISTS(SELECT NULL FROM Sys' + @TableName + 'Right WITH(NOLOCK)
WHERE RecordId = o.Id
AND SysAdminUnitId = au.Id
AND Operation = op.Id);
')
PRINT @TableName + ' was processed'